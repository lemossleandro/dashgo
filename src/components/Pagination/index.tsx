import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { number } from "yup";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  //Fomato final da paginação
  //Primeira, atual + proximas. ultima
  //1...456...20
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage); // Caso total de paginas fique quebrado, arredonda para cima

  const previsousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  //prop drilling

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="spaceBetween"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {/* Primeira Pagina  */}
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="6" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {/* Paginas anteriores */}
        {previsousPages.length > 0 &&
          previsousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}
        {/* Pagina atual */}
        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {/* Proximas Paginas */}
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {/* Ultima Pagina */}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="6" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}

"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MutateDialog } from "./MutateDialog";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import React from "react";

interface DataTableProps<TData, TValue> {
  accountId: number;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  options: OptionType[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  accountId,
  options,
}: DataTableProps<TData, TValue>) {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openCSV, setOpenCSV] = React.useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  function handleOpenAdd() {
    setOpenAdd(true);
  }

  function handleOpenCSV() {
    setOpenCSV(true);
  }

  return (
    <div className="flex flex-col gap-4 grow w-full">
      <div className="flex flex-row justify-between">
        <Search />

        <div className="flex flex-row gap-4">
          <Button onClick={handleOpenAdd}>
            <Icon iconName="Add" /> Add
          </Button>
          <Button onClick={handleOpenCSV}>
            <Icon iconName="Upload" /> CSV
          </Button>
        </div>
      </div>

      <div className="rounded-md border w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <MutateDialog
        open={openAdd}
        setOpen={setOpenAdd}
        accountId={accountId}
        options={options}
      />
    </div>
  );
}

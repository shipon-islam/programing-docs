import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ubuntuCommands } from "@/constant/programe.ts";
export default function LinuxCommand() {
  return (
    <main className="wrapper">
      <Table>
        <TableCaption className="hidden">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-900 ">
            <TableHead className="w-[200px] border ">SL</TableHead>
            <TableHead className="border">Category</TableHead>
            <TableHead className="text-right border">Command</TableHead>
            <TableHead className="border">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ubuntuCommands.map((cmd, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium py-3 border">
                #{index + 1}
              </TableCell>
              <TableCell className="text-yellow-400 py-3 border">
                {cmd.category}
              </TableCell>
              <TableCell className="text-green-500 py-3 border">
                {cmd.command}
              </TableCell>
              <TableCell className="py-3 border">{cmd.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

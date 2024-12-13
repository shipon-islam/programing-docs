import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IFunctionality } from "@/types/programe";
export default function ContentTable({
  programApi,
  tittle,
}: {
  programApi: IFunctionality[];
  tittle: string;
}) {
  return (
    <div className="mt-14">
      <h1 className="text-3xl capitalize font-medium mb-4">{tittle}</h1>
      <Table>
        <TableCaption className="hidden">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-900 ">
            <TableHead className="w-[200px] border ">Functionality</TableHead>
            <TableHead className="border">JavaScript</TableHead>
            <TableHead className="border">Python</TableHead>
            <TableHead className="text-right border">
              Short Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programApi.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium py-3 border">
                {item.functionality}
              </TableCell>
              <TableCell className="text-yellow-400 py-3 border">
                {item.javascript}
              </TableCell>
              <TableCell className="text-green-500 py-3 border">
                {item.python}
              </TableCell>
              <TableCell className="text-right py-3 border">
                {item.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

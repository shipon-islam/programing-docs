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
          <TableRow>
            <TableHead className="w-[200px] ">Functionality</TableHead>
            <TableHead>JavaScript</TableHead>
            <TableHead>Python</TableHead>
            <TableHead className="text-right">Short Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programApi.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {item.functionality}
              </TableCell>
              <TableCell>{item.javascript}</TableCell>
              <TableCell>{item.python}</TableCell>
              <TableCell className="text-right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

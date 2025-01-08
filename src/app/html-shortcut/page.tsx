import CodeBlock from "@/components/CodeBlocks";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { htmlShorthands } from "@/constant/programe";
export default function HTML_Shorhand() {
  return (
    <div className="wrapper">
      <h1 className="text-3xl capitalize font-medium mb-4">HTML Shortcut</h1>
      <Table>
        <TableCaption className="hidden">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-900 ">
            <TableHead className="w-[200px] border ">ShortHand</TableHead>
            <TableHead className="border">Expaned Output</TableHead>
            <TableHead className="border">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {htmlShorthands.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium   border">
                {item.shorthand}
              </TableCell>
              <TableCell className="text-yellow-400  border">
                <CodeBlock threeDot={false} mt="mt-" language="python">
                  {item.output}
                </CodeBlock>
              </TableCell>
              <TableCell className="text-green-500 border">
                {item.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

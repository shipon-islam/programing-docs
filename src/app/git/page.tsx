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
import { gitCommands } from "@/constant/programe";
export default function Git() {
  return (
    <div className="wrapper">
      <h1 className="text-3xl capitalize font-medium mb-4">HTML Shortcut</h1>
      <Table>
        <TableCaption className="hidden">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-900 ">
            <TableHead className="w-[200px] border ">Category</TableHead>
            <TableHead className="border">Command</TableHead>
            <TableHead className="border">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gitCommands.map((item, index) => {
            const isSameCategoryAsPrevious =
              index > 0 &&
              gitCommands[index].category === gitCommands[index - 1].category;
            return (
              <TableRow key={index}>
                {!isSameCategoryAsPrevious && (
                  <TableCell
                    rowSpan={
                      gitCommands.filter((p) => p.category === item.category)
                        .length
                    }
                    className="font-medium border"
                  >
                    {item.category}
                  </TableCell>
                )}

                <TableCell className="text-yellow-400  border">
                  <CodeBlock threeDot={false} mt="mt-" language="python">
                    {item.command}
                  </CodeBlock>
                </TableCell>
                <TableCell className="text-green-500 border">
                  {item.response}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function DomainPoint() {
  return (
    <main className="wrapper">
      <section>
        <h1 className="font-bold text-xl">
          1. Add DNS records in Namecheap or others
        </h1>
        <p className="py-4 ml-2">
          Go to Advanced DNS → Host Records for your domain:
        </p>
        <Table>
          <TableCaption className="hidden">
            A list of your recent invoices.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-slate-900 ">
              <TableHead className="w-[200px] border ">Host</TableHead>
              <TableHead className="border">Record Type</TableHead>
              <TableHead className="border">
                Value (Your VPS Public IP)
              </TableHead>
              <TableHead className="text-right border">TTL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium py-3 border">@</TableCell>
              <TableCell className="text-yellow-400 py-3 border">
                A Record
              </TableCell>
              <TableCell className="text-green-500 py-3 border">
                YOUR_VPS_IP
              </TableCell>
              <TableCell className="text-right py-3 border">300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3 border">www</TableCell>
              <TableCell className="text-yellow-400 py-3 border">
                A Record
              </TableCell>
              <TableCell className="text-green-500 py-3 border">
                YOUR_VPS_IP
              </TableCell>
              <TableCell className="text-right py-3 border">300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3 border">@</TableCell>
              <TableCell className="text-yellow-400 py-3 border">
                A Record
              </TableCell>
              <TableCell className="text-green-500 py-3 border">
                YOUR_VPS_IP ( if your hosting have IP6 )
              </TableCell>
              <TableCell className="text-right py-3 border">300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3 border">www</TableCell>
              <TableCell className="text-yellow-400 py-3 border">
                A Record
              </TableCell>
              <TableCell className="text-green-500 py-3 border">
                YOUR_VPS_IP6 ( if your hosting have IP6 )
              </TableCell>
              <TableCell className="text-right py-3 border">300</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

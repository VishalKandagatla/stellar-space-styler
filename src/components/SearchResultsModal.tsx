
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { InfoIcon, MapPinIcon, BarChart3 } from "lucide-react";

interface SearchResult {
  id: number;
  address: string;
  score: number;
  potential: string;
  [key: string]: any;
}

interface SearchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: SearchResult[];
}

const SearchResultsModal = ({ isOpen, onClose, results }: SearchResultsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-fin-blue" />
            Property Search Results
          </DialogTitle>
          <DialogDescription>
            Found {results.length} properties matching your criteria
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[500px] rounded-md">
          {results.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Property Address</TableHead>
                  <TableHead>Solar Score</TableHead>
                  <TableHead>Potential</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell className="font-medium">{result.id}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-fin-purple" />
                      {result.address}
                    </TableCell>
                    <TableCell>{result.score}/100</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        result.potential === 'High' || result.potential === 'Very High' 
                          ? 'bg-green-100 text-green-800'
                          : result.potential === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {result.potential}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" className="h-8">
                        <InfoIcon className="h-3 w-3 mr-1" /> Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No properties found matching your criteria. Try adjusting your search parameters.
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsModal;

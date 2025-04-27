import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { eadQuiz } from '@/data/ead-quiz';
import { InfoIcon } from 'lucide-react';

export function Info() {
  return (
    <Dialog>
      <DialogTrigger className="fixed right-0 top-0 m-4 cursor-pointer text-neutral-100">
        <InfoIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajuda</DialogTitle>
          <DialogDescription className="space-y-2">
            <p>
              O quiz é composto por {eadQuiz.questions.length} perguntas, e você
              pode navegar entre elas usando os botões "Próxima" e "Anterior".
              Após responder todas as perguntas, você verá sua pontuação final
              sendo exibida em um relatório detalhado.
            </p>
            <p>
              Para conseguir avançar, é necessário selecionar uma das opções
              listadas antes de prosseguir. Todas as perguntas são obrigatórias.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

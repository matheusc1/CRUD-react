import { User, UserPlus, PenLine, Trash2 } from 'lucide-react'
import { PageRoot } from '../components/PagesRoot'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table"
import { Button } from '../components/button'

export default function Clients() {
  const clientList = [
    { id: 1,
      name: 'Fulano da Silva', 
      phoneNumber: '(24) 99988-7766', 
      email: 'fulano@gmail.com', 
      cpf: '12345678912', 
      registerDate: '11/09/2023 - 20:00' 
    },
    { id: 2,
      name: 'Fulano de Almeida', 
      phoneNumber: '(24) 99966-7788', 
      email: 'fulano@outlook.com', 
      cpf: '12345678921', 
      registerDate: '11/09/2023 - 20:12' 
    },
    { id: 3,
      name: 'Fulano de Andrade', 
      phoneNumber: '(24) 99955-4433', 
      email: 'fulano@gmail.com', 
      cpf: '12345678952', 
      registerDate: '11/09/2023 - 20:14' 
    },
  ]

  return (
    <PageRoot>
      <PageHeader />

      <div className="flex items-start justify-between px-6 mt-10 gap-6">
        <Counter 
          text="Total de clientes"
          total={clientList.length}
          icon={User}
        />
        <Button>
          <UserPlus className='mr-2 h-4 w-4' /> Adicionar cliente
        </Button>
      </div>

      <div className="relative overflow-x-auto mt-8">
        <Table>
          <TableCaption>Lista de todos os clientes</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="0.5">Id</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Data de registro</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {clientList.map(client =>
            <TableRow key={client.id}>
              <TableCell className="font-medium">{client.id}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.phoneNumber}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.cpf}0</TableCell>
              <TableCell>{client.registerDate}</TableCell>
              <TableCell className='flex gap-2 align-center justify-center'>
                <PenLine className="h-5 w-5 text-blue-600 hover:text-blue-300 dark:text-violet-600 dark:hover:text-violet-300 cursor-pointer" />
                <Trash2 className="h-5 w-5 text-blue-600 hover:text-blue-300 dark:text-violet-600 dark:hover:text-violet-300 cursor-pointer" />
              </TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table>
      </div>
    </PageRoot>
  )
}
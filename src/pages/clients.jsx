import { useEffect, useState } from 'react'
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
import { Button } from '../components/Button'
import { getClients } from '../services/ApiServices'
import dayjs from 'dayjs'

export default function Clients() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const clients = await getClients()
        setClients(clients)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  function handleEdit(id) {
    alert(id)
  }

  function handleDelete(id) {
    alert(id)
  }

  return (
    <PageRoot>
      <PageHeader />

      <div className="flex items-start justify-between px-6 mt-10 gap-6">
        <Counter 
          text="Total de clientes"
          total={clients.length}
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
          {clients.map(client =>
            <TableRow key={client.id}>
              <TableCell className="font-medium">{client.id}</TableCell>
              <TableCell>{client.nome}</TableCell>
              <TableCell>{client.telefone}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.cpfOuCnpj}0</TableCell>
              <TableCell>{dayjs(client.dataCadastro).format('DD/MM/YYYY - HH:mm')}</TableCell>
              <TableCell className='flex gap-2 align-center justify-center'>
                <PenLine 
                  onClick={() => handleEdit(client.id)}
                  className="h-5 w-5 text-blue-600 hover:text-blue-300 dark:text-violet-600 dark:hover:text-violet-300 cursor-pointer" 
                />
                <Trash2
                  onClick={() => handleDelete(client.id)}
                  className="h-5 w-5 text-blue-600 hover:text-blue-300 dark:text-violet-600 dark:hover:text-violet-300 cursor-pointer" 
                />
              </TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table>
      </div>
    </PageRoot>
  )
}
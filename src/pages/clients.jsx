import { useEffect, useState } from 'react'
import { User, UserPlus, PenLine, Trash2 } from 'lucide-react'
import { PageRoot } from '../components/PagesRoot'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import { Label } from '../components/Label'
import { Input } from '../components/Input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/AlertDialog"
import { Button } from '../components/Button'
import { getClients, addClient } from '../services/ApiServices'
import dayjs from 'dayjs'

export default function Clients() {

  const [clients, setClients] = useState([])
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [date, setDate] = useState(new Date().toISOString())

  useEffect(() => {
    (async () => {
      try {
        const clients = await getClients()
        setClients(clients)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [clients])

  async function handleAdd() {
    const currentDate = new Date().toISOString()
    setDate(currentDate)

    const client = {
      nome: name,
      telefone: phoneNum,
      email: email,
      cpfOuCnpj: cpf,
      date: date
    }
    const response = await addClient(client)
    console.log(response)
  }

  function handleEdit(id) {
    setDate(new Date().toISOString)
    console.log(id)
  }

  function handleCancelEdit() {
    setName('')
    setPhoneNum('')
    setEmail('')
    setCpf('')
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              <UserPlus className='mr-2 h-4 w-4' /> Adicionar cliente
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Adicionar cliente</AlertDialogTitle>
              <AlertDialogDescription>
                Adicione as inforamações do cliente. Clique em salvar quando estiver pronto.
              </AlertDialogDescription>
            </AlertDialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phoneNumber" className="text-right">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={phoneNum}
                    onChange={e => setPhoneNum(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cpf" className="text-right">
                    CPF
                  </Label>
                  <Input
                    id="cpf"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    className="col-span-3"
                  />
                </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel
                type="button"
                variant='outline'
                onClick={() => handleCancelEdit()}
              >
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                type="button"
                onClick={() => handleAdd()}
              >
                Salvar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="relative overflow-x-auto mt-8">
        <Table>
          <TableCaption>Lista de todos os clientes</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-0.5">Id</TableHead>
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
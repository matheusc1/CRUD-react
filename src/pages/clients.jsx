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
import { AlertDialog, AlertDialogContent } from "../components/AlertDialog"
import DialogTrigger from '../components/Dialog/DialogTrigger'
import DialogHeader from '../components/Dialog/DialogHeader'
import ClientDialogBody from '../components/Dialog/ClientDialogBody'
import DialogFooter from '../components/Dialog/DialogFooter'
import ActionDialogTrigger from '../components/Dialog/ActionDialogTrigger'
import DeleteDialogHeader from '../components/DeleteDialog/DeleteDialogHeader'
import DeleteDialogFooter from '../components/DeleteDialog/DeleteDialogFooter'
import ClientDialogEdit from '../components/Dialog/ClientDialogEdit'
import { getClients, addClient, deleteClient, editClient } from '../services/ApiServices'
import dayjs from 'dayjs'

export default function Clients() {
  const [clients, setClients] = useState([])
  const [client, setClient] = useState({
    name: '',
    phoneNum: '',
    email: '',
    cpf: '',
    date: new Date().toISOString()
  })

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

  async function handleAdd() {
    setClient({
      ...client,
    })

    const clientToAdd = {
      nome: client.name,
      telefone: client.phoneNum,
      email: client.email,
      cpfOuCnpj: client.cpf,
      date: client.date
    }

    const response = await addClient(clientToAdd)
    setClients(clients => [...clients, response])
    clear()
  }

  function getClientToEdit(client) {
    setClient({
      name: client.nome,
      phoneNum: client.telefone,
      email: client.email,
      cpf: client.cpfOuCnpj,
      date: new Date().toISOString()
    })
  }

  async function handleEdit(id) {
    setClient({
      ...client,
    })

    const editedClient = {
      nome: client.name,
      telefone: client.phoneNum,
      email: client.email,
      cpfOuCnpj: client.cpf,
      date: client.date
    }

    const response = await editClient(id, editedClient)
    setClients(clients => 
      clients.map(client => (client.id === id ? response : client))
    )
    clear()
  }

  async function handleDelete(id) {
    await deleteClient(id)
    setClients(clients =>
      clients.filter(client => client.id !== id)
    )
  }

  function handleChange(e) {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    })
  }

  function clear() {
    setClient({
      name: '',
      phoneNum: '',
      email: '',
      cpf: '',
      date: new Date().toISOString()
    })
  }

  return (
    <PageRoot>
      <PageHeader />

      <header className="flex items-start justify-between px-6 mt-10 gap-6">
        <Counter 
          text="Total de clientes"
          total={clients.length ?? 0}
          icon={User}
        />
        <AlertDialog>
          <DialogTrigger icon={UserPlus} text='Adicionar cliente' />
          <AlertDialogContent>
            <DialogHeader
              title='Adicionar cliente'
              desc='Adicione as inforamações do cliente. Clique em salvar quando estiver pronto.'
            />
            <ClientDialogBody handleChange={handleChange} />
            <DialogFooter 
              variant='outline'
              onCancel={clear}
              onSave={handleAdd}
            />
          </AlertDialogContent>
        </AlertDialog>
      </header>

      <main className="relative overflow-x-auto mt-8">
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
          {clients.map(cliente =>
            <TableRow key={cliente.id}>
              <TableCell className="font-medium">{cliente.id}</TableCell>
              <TableCell>{cliente.nome}</TableCell>
              <TableCell>{cliente.telefone}</TableCell>
              <TableCell>{cliente.email}</TableCell>
              <TableCell>{cliente.cpfOuCnpj}</TableCell>
              <TableCell>{dayjs(cliente.dataCadastro).format('DD/MM/YYYY - HH:mm')}</TableCell>
              <TableCell className='flex gap-3 align-center justify-center'>
                <AlertDialog>
                <ActionDialogTrigger icon={PenLine} onClick={() => getClientToEdit(cliente)} />
                  <AlertDialogContent>
                    <DialogHeader
                      title='Editar cliente'
                      desc='Edite as inforamações do cliente. Clique em salvar quando estiver pronto.'
                    />
                    <ClientDialogEdit
                      nameValue={client.name}
                      numValue={client.phoneNum}
                      emailValue={client.email}
                      cpfValue={client.cpf}
                      handleChange={handleChange}
                    />
                    <DialogFooter
                      variant='outline'
                      onCancel={clear}
                      onSave={() => handleEdit(cliente.id)}
                    />
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <ActionDialogTrigger icon={Trash2} />
                  <AlertDialogContent>
                    <DeleteDialogHeader />
                    <DeleteDialogFooter onDelete={() => handleDelete(cliente.id)} />
                  </AlertDialogContent>
                </AlertDialog>

              </TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table>
      </main>
    </PageRoot>
  )
}
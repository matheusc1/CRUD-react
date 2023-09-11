import { User, UserPlus, PenLine, Trash2 } from 'lucide-react'

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
    <div className="flex flex-1 min-h-screen w-full bg-zinc-800 p-8">
      <div className="bg-zinc-950 min-h-full min-w-full p-5 rounded-xl shadow-lg">
        <div className="flex items-center justify-between px-8 mt-3">
          <p className="text-zinc-300">Olá Username, 👋🏼</p>
          <p className="text-zinc-400">theme</p>
        </div>

        <div className="flex items-start justify-between px-6 mt-10 gap-6">
          <div className="flex items-center justify-center gap-3">
            <div className="flex bg-zinc-500 h-14 w-14 rounded-full justify-center items-center">
              <User className="text-zinc-100 w-7 h-7" />
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-zinc-400">Total de clientes</p>
              <span className="text-zinc-100 font-semibold">2</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-zinc-500 hover:bg-zinc-400 p-2 rounded-lg text-zinc-50 cursor-pointer">
            <span>
              Adicionar cliente
            </span>
            <UserPlus className="h-5 w-5" />
          </div>
        </div>

        <div className="relative overflow-x-auto mt-8 rounded-md">
          <table className="w-full text-base text-left text-zinc-200">
            
          <thead className="text-sm text-zinc-400 uppercase bg-zinc-700">
            <tr>
              <th scope="col" className="px-2 py-3">ID</th>
              <th scope="col" className="px-2 py-3">Nome</th>
              <th scope="col" className="px-2 py-3">Telefone</th>
              <th scope="col" className="px-2 py-3">Email</th>
              <th scope="col" className="px-2 py-3">CPF</th>
              <th scope="col" className="px-2 py-3">Data de registro</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {clientList.map(client =>
              <tr key={client.id} className="border-b border-zinc-700 bg-zinc-800 text-zinc-50">
              <td className="px-2 py-2 font-medium">{client.id}</td>
              <td className="px-2 py-2 font-medium">{client.name}</td>
              <td className="px-2 py-2 font-medium">{client.phoneNumber}</td>
              <td className="px-2 py-2 font-medium">{client.email}</td>
              <td className="px-2 py-2 font-medium">{client.cpf}</td>
              <td className="px-2 py-2 font-medium">{client.registerDate}</td>
              <td className="flex gap-3 items-center justify-center py-2">
                <PenLine className="h-5 w-5 text-violet-500 hover:text-violet-300 cursor-pointer" />
                <Trash2 className="h-5 w-5 text-violet-500 hover:text-violet-300 cursor-pointer" />
              </td>
            </tr>
            )}
          </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
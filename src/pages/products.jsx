import { useEffect, useState } from 'react'
import { PageRoot } from '../components/PagesRoot'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import { Package, PackagePlus, PenLine, Trash2 } from "lucide-react"
import { getProducts, addProduct, deleteProduct, editProduct } from '../services/ApiServices'
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
import ProductDialogBody from '../components/Dialog/ProductDialogBody'
import DialogFooter from '../components/Dialog/DialogFooter'
import ActionDialogTrigger from '../components/Dialog/ActionDialogTrigger'
import DeleteDialogHeader from '../components/DeleteDialog/DeleteDialogHeader'
import DeleteDialogFooter from '../components/DeleteDialog/DeleteDialogFooter'
import ProductDialogEdit from '../components/Dialog/ProductDialogEdit'
import dayjs from 'dayjs'

export default function Products() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({
    name: '',
    value: '',
    quantity: '',
    obs: '',
    date: new Date().toISOString()
  })

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts()
        setProducts(products)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  async function handleAdd() {
    setProduct({
      ...product,
    })

    const productToAdd = {
      nome: product.name,
      valor: product.value,
      quantidadeEstoque: product.quantity,
      observacao: product.obs,
      dataCadastro: product.date
    }

    const response = await addProduct(productToAdd)
    setProducts(products => [...products, response])
    clear()
  }

  function getProductToEdit(product) {
    setProduct({
      name: product.nome,
      value: product.valor,
      quantity: product.quantidadeEstoque,
      obs: product.observacao,
      dataCadastro: new Date().toISOString()
    })
  }

  async function handleEdit(id) {
    setProduct({
      ...product
    })

    const editedProduct = {
      nome: product.name,
      valor: product.value,
      quantidadeEstoque: product.quantity,
      observacao: product.obs,
      dataCadastro: product.date
    }

    const response = await editProduct(id, editedProduct)
    setProducts(products => 
      products.map(product => (product.id === id) ? response : product)
    )
    clear()
  }

  async function handleDelete(id) {
    await deleteProduct(id)
    setProducts(products => 
      products.filter(product => product.id !== id)
    )
  }

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  function clear() {
    setProduct({
      name: '',
      value: '',
      quantity: '',
      obs: '',
      date: new Date().toISOString()
    })
  }

  return (
    <PageRoot>
      <PageHeader />

      <header className="flex items-start justify-between px-6 mt-10 gap-6">
        <Counter 
          text="Total de clientes"
          total={products.length}
          icon={Package}
        />

        <AlertDialog>
          <DialogTrigger icon={PackagePlus} text='Adicionar produto' />
          <AlertDialogContent>
            <DialogHeader
              title='Adionar produto'
              desc='Adicione as informações do produto. Clique em salvar quando estiver pronto.'
            />
            <ProductDialogBody handleChange={handleChange} />
            <DialogFooter
              variant='outline'
              onCancel={clear}
              onSave={handleAdd}
            />
          </AlertDialogContent>
        </AlertDialog>
      </header>

      <main className="relative mt-8">
        <Table>
          <TableCaption>Lista de todos os produtos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-0.5">Id</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead>Observação</TableHead>
              <TableHead>Data de registro</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(produto => 
              <TableRow key={produto.id}>
                <TableCell className="font-medium">{produto.id}</TableCell>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>R$ {produto.valor}</TableCell>
                <TableCell>{produto.quantidadeEstoque}</TableCell>
                <TableCell>{produto.observacao}</TableCell>
                <TableCell>{dayjs(produto.dataCadastro).format('DD/MM/YYYY - HH:mm')}</TableCell>
                <TableCell className='flex gap-3 align-center justify-center'>
                  <AlertDialog>
                    <ActionDialogTrigger icon={PenLine} onClick={() => getProductToEdit(produto)} />
                    <AlertDialogContent>
                      <DialogHeader
                        title='Editar produto'
                        desc='Edite as informações do produto. Clique em salvar quando estiver pronto'
                      />
                      <ProductDialogEdit
                        nameValue={product.name}
                        priceValue={product.value}
                        quantityValue={product.quantity}
                        obsValue={product.obs}
                        handleChange={handleChange}
                      />
                      <DialogFooter
                        variant='outline'
                        onCancel={clear}
                        onSave={() => handleEdit(produto.id)}
                      />
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <ActionDialogTrigger icon={Trash2} />
                    <AlertDialogContent>
                      <DeleteDialogHeader />
                      <DeleteDialogFooter onDelete={() => handleDelete(produto.id)} />
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
import { PageRoot } from '../components/PagesRoot'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import { Package, PackagePlus } from "lucide-react"
import { Button } from '../components/button'

export default function Products() {
  const productList = []
  return (
    <PageRoot>
      <PageHeader/>

      <div className="flex items-start justify-between px-6 mt-10 gap-6">
        <Counter 
          text="Total de clientes"
          total={productList.length}
          icon={Package}
        />

        <Button>
          <PackagePlus className='mr-2 h-4 w-4' /> Adicionar Produto
        </Button>
      </div>
      
    </PageRoot>
  )
}
import THTabla from '@/app/componentes/THTabla'

export default function HeadTableEstadoCiclo({cabeceras}) {
  return (
    <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
    <tr>
      {cabeceras?.map((item, i) => (
        <THTabla key={item.key} id={item.id} label={item.name} />
      ))}
    </tr>
  </thead>
  )
}

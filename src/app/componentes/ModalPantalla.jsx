import ContenedorDePantallas from './ContenedorDePantallas'

export default function ModalPantalla({children,}) {
  
  return (
    <div className='fixed animate-[aparecer_.3s] bg-gray-900/30 backdrop-blur-sm flex items-center justify-center mx-auto w-screen h-screen top-0 left-0 z-40'>
        
        <ContenedorDePantallas className={"w-1/3 relative min-h-[250px] rounded-xl overflow-hidden bg-primary-800 "}>
          
            
            {children}
        </ContenedorDePantallas>
    </div>
  )  
}

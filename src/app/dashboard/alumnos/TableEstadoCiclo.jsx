import React from 'react'

export default function TableEstadoCiclo({children}) {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative">{children}</table>
  )
}

import React from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";


function TableTelefono() {
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th colSpan={6}>Territorio # 11 -Teléfonos</th>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>1ra Llamada</th>
                    <th>2da Llamada</th>
                    <th>3ra Llamada</th>
                    <th>4ta Llamada</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={3}>...</td>
                    <td>...</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td rowSpan={2}>...</td>
                    <td>...</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableTelefono
import React from 'react'
import { GetAll } from '../interfaces/rickandmorty'
import { makeArrayFromNumber } from '../utils/makeArrayFromNumber'

export const Pagination = ({ info, pageState }: Props) => {

  const [actualPage, setPage] = pageState

  const totalPages = makeArrayFromNumber(info.pages)

  return (
    <div className="mt-4 d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item"><button disabled={!info.prev} className="page-link" onClick={() => setPage(old => old - 1)}>Previous</button></li>
        <p className="btn btn-primary mx-1">{actualPage}</p>
        <li className="page-item"><button disabled={!info.next} className="page-link" onClick={() => setPage(old => old + 1)}>Next</button></li>
      </ul>
      <select className="form-select mx-1" style={{ width: '5em', height: '2.4em' }}>
        {
          totalPages.map(page => (
            <option key={page} value={page} onClick={() => setPage(page)}>{page}</option>
          ))
        }
      </select>
    </div>
  )
}

interface Props {
  info: GetAll["info"]
  pageState: [number, React.Dispatch<React.SetStateAction<number>>]
}

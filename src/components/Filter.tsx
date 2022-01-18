import React, { useRef } from 'react'

export const Filter = ({ onSubmit, onChange, ...props }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <nav {...props} className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={(e) => {
          e.preventDefault()
          onSubmit?.(inputRef)
        }}>
          <input
            ref={inputRef}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={() => onChange?.(inputRef)}
          />
          {onSubmit && <button className="btn btn-outline-success" type="submit">Search</button>}
        </form>
      </div>
    </nav>
  )
}

interface Props {
  onSubmit?: (ref: React.RefObject<HTMLInputElement>) => void
  onChange?: (ref: React.RefObject<HTMLInputElement>) => void
  style?: React.CSSProperties
}

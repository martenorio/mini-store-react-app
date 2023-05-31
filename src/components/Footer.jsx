import { useFilters } from "../hooks/useFilters";
import "./Footer.css"

export const Footer = () => {
  const { filters } = useFilters();
  return (
    <footer className='footer'>
      {/* <h4>Prueba tecnica de react</h4>
        <h5>Shopping Cart con useContext & useReducer</h5> */}
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}

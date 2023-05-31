import { useFilters } from "../hooks/useFilters";
import "./Filters.css";
import { useId } from 'react';

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  const minPriceId = useId();
  const categoryFilter = useId();
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input type="range" id={minPriceId} min={0} max={1000} value={filters.minPrice} onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select id={categoryFilter} value={filters.category} onChange={handleChangeCategory}>
          <option value="all">all</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
        </select>
      </div>
    </section>
  )
}

const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
    return (
        <header>
            <h2>Wielkość zamowienia: {number}</h2>
            <h2>{number ? `Do zapłaty: ${number *11.9} złotych` : `Wybierz pozycje, które chcesz zamówić`}</h2>
        </header>
    )
}
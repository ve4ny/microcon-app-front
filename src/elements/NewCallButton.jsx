

export function NewCallButton() {

    const handleClick = () => {
        document.querySelector(".rollingDown").classList.add("open")
    }

  return (
    <button className="headerButton" onClick={handleClick}>Создать</button>
  )
}

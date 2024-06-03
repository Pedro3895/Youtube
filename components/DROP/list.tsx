export default function listen(
    listening:any,
    setListening:any,
    menuRef:any,
    setIsOpen:any,
  ) {
    return () => {
      if (listening) return
      if (!menuRef.current) return
      setListening(true)
      ;[`click`, `touchstart`].forEach((type) => {
        document.addEventListener(`click`, (evt) => {
          const cur = menuRef.current
          const node = evt.target
          if (cur.contains(node)) return
          setIsOpen(false)
        })
      })
    }
  }
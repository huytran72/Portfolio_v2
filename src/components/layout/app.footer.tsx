const AppFooter = () => {
  return (
    <div className="text-center my-3">
      Copyright © {new Date().getFullYear()} Huy Tran Made with{" "}
      <span
        style={{
          color: "#e25555",
        }}
      >
        ♥
      </span>{" "}
      in the US
    </div>
  )
}

export default AppFooter

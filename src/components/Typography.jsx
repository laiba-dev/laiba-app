export function Text({ color = "#202020", children }) {
  return (
    <p
      className="text"
      style={{
        color: color,
      }}
    >
      {children}
    </p>
  );
}
export function Title({ color = "#202020", children }) {
  return (
    <div
      className="title"
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
}

export function Heading3({ color = "#202020", children }) {
  return (
    <div
      className="heading-3"
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
}

export function Heading2({ color = "#202020", children }) {
  return (
    <div
      className="heading-2"
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
}
export function Heading1({ color = "#202020", children }) {
  return (
    <div
      className="heading-1"
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
}

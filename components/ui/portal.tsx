import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  selector: string;
};

const Portal = ({
  children,
  selector
}: PortalProps) => {

  const container = document.getElementById(selector);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
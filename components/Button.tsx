import Link from "next/link";

interface ButtonProps {
    href: string;
    className?: string;
    children: React.ReactNode
};

const Button: React.FC<ButtonProps> =({href, className, children}) =>{
    const styleBase = "rounded-md py-3 px-3 cursor-pointer w-[632px] text-center text-lg";
    return(
        <Link href={href} className={`${styleBase} ${className}`}>
            {children}
        </Link>
    )
};

export default Button;
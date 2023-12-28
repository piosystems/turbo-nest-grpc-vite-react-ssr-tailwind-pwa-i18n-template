import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    additionalClassNames?: string;
}

export const H1: React.FC<Props> = (props) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {props.children}
        </h1>
    )
}

export const H2: React.FC<Props> = (props) => {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {props.children}
        </h2>
    )
}

export const H3: React.FC<Props> = (props) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {props.children}
        </h3>
    )
}

export const H4: React.FC<Props> = (props) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {props.children}
        </h4>
    )
}

export const P: React.FC<Props> = (props) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {props.children}
        </p>
    )
}

export const BLOCKQUOTE: React.FC<Props> = (props) => {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {props.children}
        </blockquote>
    )
}

//Tables
export const TABLE_WRAPPER: React.FC<Props> = (props) => {
    return (
        <div className="my-6 w-full overflow-y-auto">
            {props.children}
        </div>
    )
}

export const TABLE: React.FC<Props> = (props) => {
    return (
        <table className="w-full">
            {props.children}
        </table>
    )
}

export const THEAD: React.FC<Props> = (props) => {
    return (
        <thead>
            {props.children}
        </thead>
    )
}

export const TR: React.FC<Props> = (props) => {
    return (
        <tr className="m-0 border-t p-0 even:bg-muted">
            {props.children}
        </tr>
    )
}

export const TH: React.FC<Props> = (props) => {
    return (
        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            {props.children}
        </th>
    )
}

export const TBODY: React.FC<Props> = (props) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}

export const TD: React.FC<Props> = (props) => {
    return (
        <td className={`${props.additionalClassNames}`}>
            {props.children}
        </td>
    )
}

//List
export const UL: React.FC<Props> = (props) => {
    return (
        <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${props.additionalClassNames}`}>
            {props.children}
        </ul>
    )
}

export const LI: React.FC<Props> = (props) => {
    return (
        <li className={`${props.additionalClassNames}`}>
            {props.children}
        </li>
    )
}

export const LEAD: React.FC<Props> = (props) => {
    return (
        <p className="text-xl text-muted-foreground">
            {props.children}
        </p>
    )
}

export const LARGE: React.FC<Props> = (props) => {
    return (
        <div className="text-lg font-semibold">
            {props.children}
        </div>
    )
}

export const SMALL: React.FC<Props> = (props) => {
    return (
        <small className="text-sm font-medium leading-none">
            {props.children}
        </small>
    )
}

export const MUTED: React.FC<Props> = (props) => {
    return (
        <p className="text-sm text-muted-foreground">
            {props.children}
        </p>
    )
}


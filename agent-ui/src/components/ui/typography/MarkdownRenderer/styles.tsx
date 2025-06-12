'use client'

import { FC, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import type {
  UnorderedListProps,
  OrderedListProps,
  EmphasizedTextProps,
  ItalicTextProps,
  StrongTextProps,
  BoldTextProps,
  DeletedTextProps,
  UnderlinedTextProps,
  HorizontalRuleProps,
  BlockquoteProps,
  AnchorLinkProps,
  HeadingProps,
  ImgProps,
  ParagraphProps,
  TableHeaderCellProps,
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  PreparedTextProps
} from './types'

import { HEADING_SIZES } from '../Heading/constants'
import { PARAGRAPH_SIZES } from '../Paragraph/constants'

const filterProps = (props: object) => {
  const newProps = { ...props }
  if ('node' in newProps) delete newProps.node
  return newProps
}

const UnorderedList = ({ className, ...props }: UnorderedListProps) => (
  <ul
    className={cn('pl-6 list-disc space-y-1', PARAGRAPH_SIZES.body, className)}
    {...filterProps(props)}
  />
)

const OrderedList = ({ className, ...props }: OrderedListProps) => (
  <ol
    className={cn('pl-6 list-decimal space-y-1', PARAGRAPH_SIZES.body, className)}
    {...filterProps(props)}
  />
)

const Paragraph = ({ className, ...props }: ParagraphProps) => (
  <p className={cn(PARAGRAPH_SIZES.body, 'mb-4', className)} {...filterProps(props)} />
)

const EmphasizedText = ({ className, ...props }: EmphasizedTextProps) => (
  <em className={cn('text-sm font-semibold', className)} {...filterProps(props)} />
)

const ItalicText = ({ className, ...props }: ItalicTextProps) => (
  <i className={cn('italic', PARAGRAPH_SIZES.body, className)} {...filterProps(props)} />
)

const StrongText = ({ className, ...props }: StrongTextProps) => (
  <strong className={cn('text-sm font-semibold', className)} {...filterProps(props)} />
)

const BoldText = ({ className, ...props }: BoldTextProps) => (
  <b className={cn('text-sm font-semibold', className)} {...filterProps(props)} />
)

const UnderlinedText = ({ className, ...props }: UnderlinedTextProps) => (
  <u className={cn('underline', PARAGRAPH_SIZES.body, className)} {...filterProps(props)} />
)

const DeletedText = ({ className, ...props }: DeletedTextProps) => (
  <del className={cn('line-through text-muted', PARAGRAPH_SIZES.body, className)} {...filterProps(props)} />
)

const HorizontalRule = ({ className, ...props }: HorizontalRuleProps) => (
  <hr className={cn('my-6 w-48 mx-auto border-border border-b', className)} {...filterProps(props)} />
)

const InlineCode: FC<PreparedTextProps> = ({ children }) => (
  <code className="bg-background-secondary/50 rounded-sm p-1 font-mono text-sm">{children}</code>
)

const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <blockquote className={cn('pl-4 border-l-4 border-muted italic', PARAGRAPH_SIZES.body, className)} {...filterProps(props)} />
)

const AnchorLink = ({ className, ...props }: AnchorLinkProps) => (
  <a
    className={cn('underline text-xs text-primary hover:opacity-80', className)}
    target="_blank"
    rel="noopener noreferrer"
    {...filterProps(props)}
  />
)

const Heading1 = ({ className, ...props }: HeadingProps) => (
  <h1 className={cn(HEADING_SIZES[3], 'mb-4', className)} {...filterProps(props)} />
)

const Heading2 = ({ className, ...props }: HeadingProps) => (
  <h2 className={cn(HEADING_SIZES[3], 'mb-4', className)} {...filterProps(props)} />
)

const Heading3 = ({ className, ...props }: HeadingProps) => (
  <h3 className={cn(PARAGRAPH_SIZES.lead, 'mb-4', className)} {...filterProps(props)} />
)

const Heading4 = ({ className, ...props }: HeadingProps) => (
  <h4 className={cn(PARAGRAPH_SIZES.lead, 'mb-4', className)} {...filterProps(props)} />
)

const Heading5 = ({ className, ...props }: HeadingProps) => (
  <h5 className={cn(PARAGRAPH_SIZES.title, 'mb-3', className)} {...filterProps(props)} />
)

const Heading6 = ({ className, ...props }: HeadingProps) => (
  <h6 className={cn(PARAGRAPH_SIZES.title, 'mb-3', className)} {...filterProps(props)} />
)

const Img = ({ src, alt }: ImgProps) => {
  const [error, setError] = useState(false)
  if (!src) return null

  const srcString = typeof src === 'string' ? src : ''

  return (
    <div className="w-full max-w-xl my-4">
      {error ? (
        <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-md bg-secondary/50 text-muted">
          <Paragraph className="text-primary">Image unavailable</Paragraph>
          {srcString && (
            <Link
              href={srcString}
              target="_blank"
              className="max-w-md truncate underline"
            >
              {srcString}
            </Link>
          )}
        </div>
      ) : (
        <Image
          src={srcString}
          width={1280}
          height={720}
          alt={alt ?? 'Rendered image'}
          className="rounded-md object-cover w-full h-auto"
          onError={() => setError(true)}
          unoptimized
        />
      )}
    </div>
  )
}

const Table = ({ className, ...props }: TableProps) => (
  <div className="w-full max-w-[560px] overflow-hidden rounded-md border border-border my-6">
    <div className="w-full overflow-x-auto">
      <table className={cn('w-full text-left', className)} {...filterProps(props)} />
    </div>
  </div>
)

const TableHead = ({ className, ...props }: TableHeaderProps) => (
  <thead className={cn('bg-muted/10 text-sm font-semibold', className)} {...filterProps(props)} />
)

const TableHeadCell = ({ className, ...props }: TableHeaderCellProps) => (
  <th className={cn('px-4 py-2 text-sm font-semibold', className)} {...filterProps(props)} />
)

const TableBody = ({ className, ...props }: TableBodyProps) => (
  <tbody className={cn('text-xs', className)} {...filterProps(props)} />
)

const TableRow = ({ className, ...props }: TableRowProps) => (
  <tr className={cn('border-b border-border last:border-b-0', className)} {...filterProps(props)} />
)

const TableCell = ({ className, ...props }: TableCellProps) => (
  <td className={cn('px-4 py-2 text-sm', className)} {...filterProps(props)} />
)

export const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  ul: UnorderedList,
  ol: OrderedList,
  em: EmphasizedText,
  i: ItalicText,
  strong: StrongText,
  b: BoldText,
  u: UnderlinedText,
  del: DeletedText,
  hr: HorizontalRule,
  blockquote: Blockquote,
  code: InlineCode,
  a: AnchorLink,
  img: Img,
  p: Paragraph,
  table: Table,
  thead: TableHead,
  th: TableHeadCell,
  tbody: TableBody,
  tr: TableRow,
  td: TableCell
}

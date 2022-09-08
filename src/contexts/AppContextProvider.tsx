interface Props {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
  children: React.ReactNode
}

export default function AppContextProviders(props: Props) {
  const { components = [], children } = props

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}

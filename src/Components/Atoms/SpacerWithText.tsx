export interface ISpacerWithTextProps {
  text: string
}

export function SpacerWithText(props: ISpacerWithTextProps) {
  return (
    <div>
      <div className="w-full flex justify-center  ">
        <div className="flex flex-grow  border-b-2 border-gray-300 mb-2 mx-2 " />
        {props.text}
        <div className="flex flex-grow  border-b-2 border-gray-300 mb-2 mx-2 " />
      </div>
    </div>
  )
}

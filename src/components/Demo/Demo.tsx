import './Demo.less'

interface DemoProps {
    children?: JSX.Element
}

export default class Demo extends React.Component<DemoProps> {
    public static defaultProps: DemoProps = {
    }

    public state: object = {
    }

    public render(): JSX.Element {
        return (
            <div className="demo" />
        )
    }
}

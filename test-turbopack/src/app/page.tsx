import Image from 'next/image'
import Test from '../test.mdx'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Test/>
            {/*    now you can use markdown in app  */}
        </main>
    )
}

import React from 'react'
import Card from '../components/Card'
import { Heading1, Text } from '../components/Typography'

export default function NotFound() {
    return (
        <div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
            <Card>
                <div style={{ padding: '50px' }}>
                    <Heading1>404</Heading1>
                    <Text>Halaman yang anda cari tidak ditemukan</Text>
                </div>
            </Card>
        </div>
    )
}

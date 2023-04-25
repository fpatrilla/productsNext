import React from 'react'
import Layout from '../../../components/Layout'
import { global } from 'styled-jsx/css'
import Link from 'next/link'

export default function index({data}) {
  return (
    <Layout>
    Productos
    {data.map(({id, title, body}) => (
      <div key={id}>
      <Link href={`/products/${id}`}> <h3>{id} - {title}</h3></Link>
       
        <p>{body}</p>
      </div>
    ))}
   


    </Layout>

  )
}

export async function getStaticProps(){
  try {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return{
      props:{
        data 
      }
    }
  } catch (error) {
    console.log('error ');
  }
}


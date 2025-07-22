<script>
    import { PRODUCTS_ENDPOINT } from "$lib/utils/endpoint";
    import { onMount } from "svelte";

    
    
    let products = []

    const getProducts = async () => {
         const res = await fetch(PRODUCTS_ENDPOINT);
         const data = await res.json();
        if(res.ok){
            products = data?.data
        }
    }

    onMount(async()=>{
        
        try{
            getProducts();
        }catch(err){
            console.log(err)
        }
    })

</script>


{#each products as product }
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <p>{product.stock}</p>
{/each}

<h1>Products</h1>
<script>
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import logout from '$lib/images/logout.svg';
	import './header.css';

	// Authentication state - you can replace this with actual auth logic later
	let isAuthenticated = false;

	function handleLogout() {
		isAuthenticated = false;
		// Add logout logic here
	}

</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="companylogo" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={page.url.pathname === '/products' ? 'page' : undefined}>
				<a href="/products">Products</a>
			</li>

			<li aria-current={page.url.pathname === '/cart' ? 'page' : undefined}>
				<a href="/cart">Cart</a>
			</li>
			
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		{#if isAuthenticated}
			<button on:click={handleLogout} class="logout-btn">
				<img src={logout} alt="logout"/>
			</button>
		{:else}
			<a href="/login">
				<img src={logout} alt="login"/>
			</a>
		{/if}
	</div>
</header>

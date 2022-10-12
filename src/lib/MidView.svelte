<script lang="ts">
    import LangChoose from "./LangChoose.svelte";
    import LangTable from "./DataTable.svelte";
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="text-center">
        <div class="hero-content">
            <h1 class="text-xl font-bold"><LangChoose/></h1>
            <button class="btn btn-primary m-1">Go</button>
            <br>
        </div>
        <div>
            <LangTable/>
        </div>
    </div>
    
</div>
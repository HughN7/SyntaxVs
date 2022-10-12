<script lang="ts">
    export let text: string = ""; 
</script>
<select class="text-xl font-bold select select-ghost select-sm w-auto max-w-xs">
    <option disabled selected>{text}</option>
    <option>Java</option>
    <option>Go</option>
    <option>C</option>
    <option>C#</option>
    <option>C++</option>
    <option>Rust</option>
    <option>JavaScript</option>
    <option>Python</option>
</select>
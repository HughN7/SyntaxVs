<script lang="ts">
    export let lang1:string = "language 1"; 
    export let lang2:string = "language 2"; 
</script>

<div class="overflow-x-auto">
    <table class="table w-full">
        <!-- head -->
        <thead>
        <tr>
            <th>0</th>
            <th>Type</th>
            <th>{lang1}</th>
            <th>{lang2}</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr class="hover">
            <th>1</th>
            <td>Printing</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover">
            <th>2</th>
            <td>String</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr class="hover">
            <th>3</th>
            <td>Integers</td>
            <td>Tax Accountant</td>
            <td>Red</td>
        </tr>
        <!-- row 4 -->
        <tr class="hover">
            <th>4</th>
            <td>Integers</td>
            <td>Tax Accountant</td>
            <td>Red</td>
        </tr>
        </tbody>
    </table>
</div>
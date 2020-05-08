<template>
    <div id='dashboard'>
        <!-- This list and classes here are from Materialize -->
        <ul class="collection with-header"> 
            <li class="collection-header"><h4>Employees Dashboard</h4></li>
            <li class="collection-item" v-for="employee in employees" :key="employee.id">
                <div class="chip"> {{employee.dept}}</div>
                {{employee.employee_id}} : {{employee.name}}
                
                <!-- Lets add an icon in each list to click <router-link>-->
                <router-link class="secondary-content" :to="{name: 'view-employee', 
                params: {employee_id: employee.employee_id}}">
                    <i class="fa fa-eye"></i>
                </router-link>
            </li>                
        </ul>
        
        <!-- Floating Button -->
        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating button-large teal">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
    export default {
        name: 'dashboard',
        data() {
            return {
                employees: []
            }
        },
        
        created() {
            db.collection('employees').orderBy('employee_id').get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const data = {
                            'id': doc.id, //bcos it's auto-generated
                            'employee_id': doc.data().employee_id,
                            'name': doc.data().name,
                            'dept': doc.data().dept,
                            'position': doc.data().position,
                        }
                        this.employees.push(data)
                    })
                })
        }
    }
</script>

<style scoped>

</style>
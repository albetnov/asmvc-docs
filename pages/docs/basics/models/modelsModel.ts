export const navigations = [
    {link: "model", title: "The Model"},
    {link: "asmvc-model", title: "ASMVC Built In Model"},
    {link: "eloquent-model", title: "Eloquent Support"},
    {link: "generation", title: "Model Generation"},
    {link: "using-model", title: "Using your model"},
    {link: "asmvc-available-method", title: "Available Method for ASMVC Model"}
];

export const envForAsmvcModel = `APP_CSRF_DRIVER=asmvc`;
export const envForEloquentModel = `APP_CSRF_DRIVER=eloquent`;

export const modelExample = `<?php
    
namespace App\\Asmvc\\Models;

use App\\Asmvc\\Core\\Database\\Model;

class ModelName extends Model
{
    protected string $table = 'table-name';
}
`;

export const eloquentAlikeUsage = `ModelName::query()`;

export const asmvcUsage = `$model = new ModelName();
$model->query();`;

export const getUsage = `$model->get()`;
export const whereUsage = `$model->where($field, $value, $operator = null)`;
export const whereNoFormat = `$model->whereNoFormat()->where($field, $value, $operator)`;
export const orWhere = `$model->where($field, $value, $opr)->orWhere($field, $value, $operator = null)`;
export const orderBy = `$model->orderBy($field, $order)`;
export const orderByDesc = `$model->orderByDesc($field)`;
export const orderByAsc = `$model->orderByAsc($field)`;
export const limit = `$model->limit($itemCount)`;
export const innerJoin = `$model->join($table, $fromId, $toId)`;
export const leftJoin = `$model->leftJoin($table, $fromId, $toId)`;
export const rightJoin = `$model->rightJoin($table, $fromId, $toId)`;
export const fullJoin = `$model->fullJoin($table, $fromId, $toId)`;
export const first = `$model->first()`;
export const count = `$model->count()->result`;
export const insert = `$model->insert($data = [], $lastInsertId = false)`;
export const lastInsertId = `$model->lastInsertId()`;
export const update = `$model->update($data = [])`;
export const deleteField = `$model->delete($data = [])`;

export const tableUsage = `$model->table($tableName)`;
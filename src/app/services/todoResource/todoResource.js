function TodoResourceFn($resource) {
    return $resource('todos/all.json');
}

export default TodoResourceFn;

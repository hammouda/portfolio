<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use App\Models\Project;


class ProjectController extends Controller
{
    function index() {
        $projects = Project::all();
        return  ProjectResource::collection($projects);
    }
}

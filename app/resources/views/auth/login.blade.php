@extends('layout')

@section('content')
  <div class="flex justify-center">
    <div class="w-8/12 bg-indigo-400 p-6 rounded-lg">
      @if (session('status'))
        <div class="bg-red-500 p-4 my-4 rounded-lg text-white text-center">
          {{ session('status') }}
        </div>
      @endif

      <form action="{{ route('login') }}" clas="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST">
        @csrf
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-2" for="email">
            Email
          </label>
          <input type="text" name="email" id="email" placeholder="Email"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('email') border-red-500 @enderror"
            value="{{ old('email') }}">

          @error('email')
            <div class="rext-red-500 mt-2 text-sm">
              {{ $message }}
            </div>
          @enderror
        </div>


        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-2" for="password">
            Email
          </label>
          <input type="password" name="password" id="password" placeholder="Password"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('password') border-red-500 @enderror">

          @error('password')
            <div class="rext-red-500 mt-2 text-sm">
              {{ $message }}
            </div>
          @enderror
        </div>

        <div class="mb-4">
          <div class="flex items-center">
            <input type="checkbox" name="remember" id="remember" class=" mr-2">
            <label for="remember">Remember me</label>
          </div>
        </div>

        <div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full">Login</button>
        </div>
      </form>
    </div>
  @endsection

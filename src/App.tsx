import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index.tsx";
import Cursos from "./pages/Cursos.tsx";
import CursoDetalhe from "./pages/CursoDetalhe.tsx";
import Blog from "./pages/Blog.tsx";
import AreaAluno from "./pages/AreaAluno.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminLayout from "./components/admin/AdminLayout.tsx";
import { RequireAdmin } from "./components/admin/RequireAdmin.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminCursos from "./pages/admin/AdminCursos.tsx";
import AdminCategorias from "./pages/admin/AdminCategorias.tsx";
import AdminHome from "./pages/admin/AdminHome.tsx";
import AdminBlog from "./pages/admin/AdminBlog.tsx";
import AdminContato from "./pages/admin/AdminContato.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<CursoDetalhe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/area-do-aluno" element={<AreaAluno />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminLayout />
                </RequireAdmin>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="cursos" element={<AdminCursos />} />
              <Route path="categorias" element={<AdminCategorias />} />
              <Route path="home" element={<AdminHome />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="contato" element={<AdminContato />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

using JustDecompile.API.Core;
using System;
using System.Collections.Generic;
using System.IO;

namespace JustDecompile.API.Core.Services
{
    public interface IAssemblyManagerService
    {
        IEnumerable<IAssemblyDefinition> LoadedAssemblies
        {
            get;
        }

        IAssemblyDefinition HotReplaceAssembly(string filePath, Stream stream);

        void LoadAssemblies(string[] locations);

        void LoadAssembly(string assemblyLocation);
    }
}
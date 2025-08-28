package in.pratikkashyap.invoicegeneratorapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import in.pratikkashyap.invoicegeneratorapi.entity.Invoice;

import java.util.List;
import java.util.Optional;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {

    List<Invoice> findByClerkId(String id);

    Optional<Invoice> findByClerkIdAndId(String clerkId, String id);
}
